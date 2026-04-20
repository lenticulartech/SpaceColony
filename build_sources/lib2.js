// Shared helpers and styles for the restructured Architecture Assessment
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, PageOrientation, LevelFormat,
  TabStopType, TabStopPosition, PositionalTab, PositionalTabAlignment,
  PositionalTabRelativeTo, PositionalTabLeader, ImageRun,
  HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign,
  PageNumber, PageBreak, TableOfContents
} = require('docx');

const fs = require('fs');

// Colors (IBM palette, professional, no logos)
const C = {
  text: "222222",
  muted: "555555",
  accent: "1F4E79",
  accentLight: "D5E8F0",
  border: "B0B7BF",
  headerBg: "1F4E79",
  rowAlt: "F4F6F8",
  good: "548235",
  warn: "BF9000",
  bad: "C00000",
  subtle: "E8ECF0"
};

const W = {
  content: 9360,
  fullPage: 12240,
  fullPageHeight: 15840,
};

const border = { style: BorderStyle.SINGLE, size: 4, color: C.border };
const borders = { top: border, bottom: border, left: border, right: border };

// Paragraphs
const p = (text, opts = {}) => new Paragraph({
  children: [new TextRun({ text, size: opts.size || 22, bold: opts.bold, italics: opts.italics, color: opts.color || C.text })],
  spacing: { before: opts.before ?? 60, after: opts.after ?? 120, line: 300 },
  alignment: opts.align || AlignmentType.LEFT,
});

const pb = (text, opts = {}) => p(text, { ...opts, bold: true });
const pi = (text, opts = {}) => p(text, { ...opts, italics: true });

// Sub-heading below an h3 (bold lead-in paragraph)
const leadIn = (text) => new Paragraph({
  children: [new TextRun({ text, size: 22, bold: true, color: C.text })],
  spacing: { before: 180, after: 80, line: 300 },
});

// Headings
const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, size: 32, bold: true, color: C.accent })],
  spacing: { before: 360, after: 180 },
  pageBreakBefore: true,
});

const h1NoBreak = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, size: 32, bold: true, color: C.accent })],
  spacing: { before: 360, after: 180 },
});

const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text, size: 26, bold: true, color: C.accent })],
  spacing: { before: 280, after: 120 },
});

const h3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun({ text, size: 22, bold: true, color: C.text })],
  spacing: { before: 220, after: 100 },
});

const spacer = (after = 120) => new Paragraph({
  children: [new TextRun({ text: "", size: 22 })],
  spacing: { before: 0, after },
});

const PB = new Paragraph({ children: [new PageBreak()] });

// Tables
const tcell = (text, opts = {}) => new TableCell({
  borders,
  width: { size: opts.width, type: WidthType.DXA },
  shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR } : undefined,
  margins: { top: 80, bottom: 80, left: 120, right: 120 },
  verticalAlign: VerticalAlign.CENTER,
  children: [new Paragraph({
    children: [new TextRun({
      text: String(text),
      size: opts.size || 20,
      bold: opts.bold,
      color: opts.color || C.text
    })],
    alignment: opts.align || AlignmentType.LEFT,
    spacing: { before: 0, after: 0 }
  })]
});

const mkTable = (columnWidths, headers, rows) => {
  const h = new TableRow({
    tableHeader: true,
    children: headers.map((text, i) =>
      tcell(text, { width: columnWidths[i], bold: true, color: "FFFFFF", fill: C.headerBg })
    )
  });
  const dataRows = rows.map((row, idx) => new TableRow({
    children: row.map((text, i) =>
      tcell(text, { width: columnWidths[i], fill: idx % 2 === 1 ? C.rowAlt : undefined })
    )
  }));
  return new Table({
    width: { size: columnWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths,
    rows: [h, ...dataRows]
  });
};

// Image insertion
const figure = (path, width, height, title) => {
  const img = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 120 },
    children: [new ImageRun({
      type: path.endsWith('.png') ? "png" : "jpg",
      data: fs.readFileSync(path),
      transformation: { width, height },
      altText: { title, description: title, name: title }
    })]
  });
  const caption = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 40, after: 200 },
    children: [new TextRun({ text: title, size: 18, italics: true, color: C.muted })]
  });
  return [img, caption];
};

module.exports = {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, PageOrientation, LevelFormat,
  TabStopType, TabStopPosition, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, TableOfContents,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  ImageRun,
  C, W, border, borders,
  p, pb, pi, leadIn, h1, h1NoBreak, h2, h3, spacer, PB,
  tcell, mkTable, figure,
  fs
};
