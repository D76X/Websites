namespace CodeRambo.Entities {
    public class TileSeries {

        public int TileId { get; set; }
        public Tile Tile { get; set; }

        public int SeriesId { get; set; }
        public Series Series { get; set; }
    }
}
