export class Marcador
{
  public lat: number;
  public lng: number;

  public titulo: string;
  public desc: string;

  constructor(lat: number, lng: number, titulo: string, desc: string)
  {
    this.lat = lat;
    this.lng = lng;
    this.titulo = titulo;
    this.desc = desc;
  }
}
