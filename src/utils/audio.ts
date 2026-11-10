// Realistic procedural fireworks sound engine using Web Audio API

class FireworksSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public playLaunchSound(volume = 0.25) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Rocket whistle/whoosh
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(1150, now + 0.45);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(volume * 0.25, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);

      // Add slight noise filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.Q.setValueAtTime(3, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch {
      // AudioContext might be blocked until user gesture
    }
  }

  public playBurstSound(type: 'boom' | 'crackle' | 'willow' = 'boom', volume = 0.4) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // 1. Sub-bass thump (percussive boom)
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.4);

      oscGain.gain.setValueAtTime(volume * 0.8, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);

      // 2. Filtered burst noise (explosion air shock)
      const bufferSize = this.ctx.sampleRate * 0.5;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(80, now + 0.4);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(volume * 0.6, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.5);

      // 3. Crackle effect if crackle or willow
      if (type === 'crackle' || type === 'willow') {
        const crackleCount = type === 'crackle' ? 8 : 4;
        for (let i = 0; i < crackleCount; i++) {
          const delay = 0.15 + Math.random() * 0.4;
          setTimeout(() => {
            if (!this.ctx || this.isMuted) return;
            const cNow = this.ctx.currentTime;
            const crackleOsc = this.ctx.createOscillator();
            const cGain = this.ctx.createGain();

            crackleOsc.type = 'triangle';
            crackleOsc.frequency.setValueAtTime(1400 + Math.random() * 800, cNow);

            cGain.gain.setValueAtTime(volume * 0.2, cNow);
            cGain.gain.exponentialRampToValueAtTime(0.001, cNow + 0.05);

            crackleOsc.connect(cGain);
            cGain.connect(this.ctx.destination);

            crackleOsc.start(cNow);
            crackleOsc.stop(cNow + 0.06);
          }, delay * 1000);
        }
      }
    } catch {
      // Ignore user gesture errors
    }
  }
}

export const soundEngine = new FireworksSoundEngine();

