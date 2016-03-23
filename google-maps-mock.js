window.google = {
	maps: {
		event: {
			addDomListener: function(obj, event, cb) {
				return {
					Ob: obj,
					R: event,
					U: 1,
					id: 1,
					j: cb
				}
			}
		},
		LatLng: function(lat, lng) {
			return {
				latitude: parseFloat(lat),
				longitude: parseFloat(lng),

				lat: function() { return this.latitude; },
				lng: function() { return this.longitude; }
			};
		},
		LatLngBounds: function(ne, sw) {
			return {
				getSouthWest: function() { return sw; },
				getNorthEast: function() { return ne; }
			};
		},
		OverlayView: function() {
			return {};
		},
		InfoWindow: function() {
			return {};
		},
		Marker: function() {
			return {};
		},
		MarkerImage: function() {
			return {};
		},
		Map: function() {
			return {};
		},
		Point: function() {
			return {};
		},
		Size: function() {
			return {};
		}
	}
};