namespace CodeRambo.Entities {

    public class TileTag  {

        public int TileId { get; set; }
        public Tile Tile { get; set; }

        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
