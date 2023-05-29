import ExportControl from '@geolonia/mbgl-export-control'

const map = new geolonia.Map( '#map' )

// Add the control to download png.
map.addControl(new ExportControl({
  dpi: 300,
  attribution: "© OpenStreetMap Contributors",
}), 'top-left');