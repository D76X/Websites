using Microsoft.EntityFrameworkCore;

namespace CosmicMixer.Entities {

    public class SiteDbContext : DbContext {

        public DbSet<Tile> Tiles { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Series> Series { get; set; }
        public DbSet<Tag> Tags { get; set; }

        public SiteDbContext(DbContextOptions<SiteDbContext> options):base(options) {

            Database.EnsureCreated();
        }

        protected override void OnConfiguring(
            DbContextOptionsBuilder optionsBuilder) {

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            modelBuilder.Entity<Tile>()
                .HasOne(t => t.Author)
                .WithMany(a => a.Tiles);

            modelBuilder.Entity<TileSeries>()
                .HasKey(s => new { s.TileId, s.SeriesId });

            modelBuilder.Entity<TileTag>()
                .HasKey(s => new { s.TileId, s.TagId });

            modelBuilder.Entity<SeriesAuthor>()
                .HasKey(s => new { s.SeriesId, s.AuthorId });

            modelBuilder.Entity<AuthorTag>()
                .HasKey(s => new { s.AuthorId, s.TagId });

            modelBuilder.Entity<Tile>()
                .HasIndex(a => a.Title)
                .IsUnique();

            modelBuilder.Entity<Tile>()
                .HasIndex(a => a.UrlContent)
                .IsUnique();

            modelBuilder.Entity<Author>()
                .HasIndex(a => a.Username)
                .IsUnique();

            modelBuilder.Entity<Author>()
                .HasIndex(a => a.Email)
                .IsUnique();

            modelBuilder.Entity<Tag>()
                .HasIndex(a => a.Name)
                .IsUnique();

            modelBuilder.Entity<Series>()
                .HasIndex(a => a.Name)
                .IsUnique();
        }
    }
}
