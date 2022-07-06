﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OptimalAccessibility.Domain.Models.Database
{
        [Table("PosterAccessiblityScore")]
        public class PosterAccessibilityScore
        {
            [Key]
            public Guid accessibilityScoreId { get; set; }
            public Guid posterId { get; set; }

            [Column("Text")]
            public int TextRating { get; set; } = default;
            [Column("Structure")]
            public int StructureRating { get; set; } = default;
            [Column("Color")]
            public int ColorRating { get; set; } = default;
        }
}