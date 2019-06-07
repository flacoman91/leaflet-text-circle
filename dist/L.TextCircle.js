(function(){function t(e,i,r){function n(s,a){if(!i[s]){if(!e[s]){var l=typeof require=="function"&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[s]={exports:{}};e[s][0].call(u.exports,function(t){var i=e[s][1][t];return n(i?i:t)},u,u.exports,t,e,i,r)}return i[s].exports}var o=typeof require=="function"&&require;for(var s=0;s<r.length;s++)n(r[s]);return n}return t})()({1:[function(t,e,i){"use strict";
/**
 * Leaflet SVG circle marker with detachable and draggable label and text
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */e.exports=t("./src/marker")},{"./src/marker":3}],2:[function(t,e,i){(function(t){"use strict";var i=typeof window!=="undefined"?window["L"]:typeof t!=="undefined"?t["L"]:null;var r=i.CircleMarker.extend({options:{textStyle:{color:"#fff",fontSize:12,fontWeight:300},shiftY:7},initialize:function t(e,r,n){this._text=e;this._textElement=null;this._textNode=null;this._textLayer=null;i.CircleMarker.prototype.initialize.call(this,r,n)},setText:function t(e){this._text=e;if(this._textNode){this._textElement.removeChild(this._textNode)}this._textNode=document.createTextNode(this._text);this._textElement.appendChild(this._textNode);return this},getText:function t(){return this._text},bringToFront:function t(){i.CircleMarker.prototype.bringToFront.call(this);this._groupTextToPath()},bringToBack:function t(){i.CircleMarker.prototype.bringToBack.call(this);this._groupTextToPath()},_groupTextToPath:function t(){var e=this._path;var i=this._textElement;var r=e.nextSibling;var n=e.parentNode;if(i&&n){if(r&&r!==i){n.insertBefore(i,r)}else{n.appendChild(i)}}},_updatePath:function t(){i.CircleMarker.prototype._updatePath.call(this);this._updateTextPosition()},_transform:function t(e){i.CircleMarker.prototype._transform.call(this,e);this._textLayer=this._textLayer||{_path:this._textElement};if(e){this._renderer.transformPath(this._textLayer,e)}else{this._renderer._resetTransformPath(this._textLayer);this._updateTextPosition();this._textLayer=null}},onAdd:function t(e){i.CircleMarker.prototype.onAdd.call(this,e);this._initText();this._updateTextPosition();this.setStyle();return this},_initText:function t(){this._textElement=i.SVG.create("text");this.setText(this._text);this._renderer._rootGroup.appendChild(this._textElement)},_updateTextPosition:function t(){var e=this._textElement;if(e){var r=e.getBBox();var n=this._point.subtract(i.point(r.width,-r.height+this.options.shiftY).divideBy(2));e.setAttribute("x",n.x);e.setAttribute("y",n.y);this._groupTextToPath()}},setStyle:function t(e){i.CircleMarker.prototype.setStyle.call(this,e);if(this._textElement){var r=this.options.textStyle;for(var n in r){if(r.hasOwnProperty(n)){var o=n;if(n==="color"){o="stroke"}this._textElement.style[o]=r[n]}}}},onRemove:function t(e){if(this._textElement){if(this._textElement.parentNode){this._textElement.parentNode.removeChild(this._textElement)}this._textElement=null;this._textNode=null;this._textLayer=null}return i.CircleMarker.prototype.onRemove.call(this,e)}});e.exports=i.TextCircle=r;i.textCircle=function(t,e,i){return new r(t,e,i)}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],3:[function(t,e,i){(function(i){"use strict";var r=typeof window!=="undefined"?window["L"]:typeof i!=="undefined"?i["L"]:null;var n=t("./circle");var o=r.FeatureGroup.extend({options:{getLabelText:function t(e,i){return i.properties.text},getLabelPosition:function t(e,i,n){return i.properties.labelPosition?r.latLng(i.properties.labelPosition.slice().reverse()):n},labelPositionKey:"labelPosition",markerOptions:{color:"#f00",fillOpacity:.75,radius:15}},initialize:function t(e,i,n){r.Util.setOptions(this,n);this.feature=i||{type:"Feature",properties:{},geometry:{type:"Point"}};this._latlng=e;this._marker=null;this._createLayers();r.LayerGroup.prototype.initialize.call(this,[this._marker])},getLabelPosition:function t(){return this._marker.getLatLng()},getLatLng:function t(){return this._latlng},setText:function t(e){this._marker.setText(e);return this},_createLayers:function t(){var e=this.options;var i=e.getLabelPosition(this,this.feature,this._latlng);var s=e.getLabelText(this,this.feature);this._marker=new n(s,i,r.Util.extend({interactive:this.options.interactive},o.prototype.options.markerOptions,e.markerOptions))}});r.TextCircleMarker=o;r.textCircleMarker=function(t,e,i){return new o(t,e,i)};e.exports=o}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./circle":2}]},{},[1]);