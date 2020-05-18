export class API {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }

  async consultApi() {
    const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}}`);

    const answer = await url.json();

    return {
      answer,
    };
  }
}
