import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyBQ3BSgfELvkao0TSM-CYS-s40aIhvjF0Y' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={43.5525016784668}
        lng={7.021884918212891}
        text={'Kreyser Avrora'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap