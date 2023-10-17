import{j as u,aN as l,o as s,c as m,n as f}from"./app.js";import"./Control.Geocoder.js";import{_}from"./plugin-vue_export-helper.js";const h={name:"LeafletMap",props:{lat:{type:Number,default:16},lng:{type:Number,default:96},mapSize:{type:String,default:"h-64 w-full"},onChange:Function,dragValue:{type:Boolean,default:!0},mapContainer:{type:String,default:"mapContainer"},dir:String},setup(e){let a=null;u(()=>{let n="",d=e.dir.replaceAll("\\","");d!=null&&d!=""?n="/"+e.dir:n="";var r=l.icon({iconUrl:n+"/images/assets/marker-icon.png",shadowUrl:n+"/images/assets/marker-shadow.png"});a=l.map(e.mapContainer).setView([e.lat==null||isNaN(e.lat)?16.7967129:e.lat,e.lng==null||isNaN(e.lng)?96.1609916:e.lng],12);var o;l.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),l.Control.geocoder({defaultMarkGeocode:!1}).addTo(a).on("markgeocode",function(t){a.flyTo(t.geocode.center,12),o=new l.Marker([t.geocode.properties.lat,t.geocode.properties.lon],{icon:r,draggable:e.dragValue}).addTo(a);var i={lat:t.geocode.properties.lat,lng:t.geocode.properties.lon};e.onChange(i),o.on("dragend",g)}),e.dragValue?(o=new l.Marker([e.lat,e.lng],{icon:r,draggable:e.dragValue}).addTo(a),o.on("dragend",g)):(o=new l.Marker([e.lat,e.lng],{icon:r}).addTo(a),o.on("dragend"));function g(t){var i=t.target.getLatLng();e.onChange!=null&&e.onChange(i)}})}},y=["id"];function p(e,a,n,c,d,r){return s(),m("div",{class:f([n.mapSize,"mapContainer"]),id:n.mapContainer},null,10,y)}var M=_(h,[["render",p]]);export{M as default};
