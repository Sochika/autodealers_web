import{i as v,j as C,S as g,o as L,c as y,a as b}from"./app.js";import{$ as r}from"./dropzone2.js";const F={__name:"Dropzone",props:{images:Object,edit_mode:{type:Number,default:0},item_id:{type:Number,default:0},max_image_upload:{type:Number},dir:String},emits:["clicked"],setup(h,{emit:d}){const t=h;v();const l=v(null),_=`<div class="dz-preview dz-file-preview ">
  <div class="dz-image flex justify-center items-center"><img data-dz-thumbnail /></div>
  <div class="dz-details">
    <div class="dz-size"><span data-dz-size></span></div>
    <div class="dz-filename"><span data-dz-name></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress></span>
  </div>
  <div class="dz-error-message"><span data-dz-errormessage></span></div>
  <div class="dz-success-mark">
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"
      />
    </svg>
  </div>
  <div class="dz-error-mark">
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"
      />
    </svg>
  </div>
</div>`;return C(function(f){if(l.value!==null){let s="",m=t.dir.replaceAll("\\","");m!=null&&m!=""?s="/"+t.dir:s="";let w=new r(l.value,{previewTemplate:_,url:s+"/admin/item/upload-multi",method:"Post",maxFiles:t.max_image_upload,headers:{"X-CSRF-TOKEN":g().props.value.csrf},acceptedFiles:"image/jpeg,image/png,image/jpg",addRemoveLinks:!0,init:function(n){this.on("thumbnail",function(e,a){e.previewElement.childNodes[1].childNodes[0]}),this.on("addedfile",function(e){var a=e.caption==null?"":e.caption;e._captionLabel=r.createElement("<div class='flex'><p>File Info:</p>"),e._captionBox=r.createElement("<input class='rounded block dark:bg-secondaryDark-black w-full px-4 py-2.25 text-sm shadow-sm placeholder-secondary-500' id='"+e.upload.uuid+"' type='text' name='caption[]'  value='"+a+"'>"),e.previewElement.appendChild(e._captionLabel),e.previewElement.appendChild(e._captionBox),e.previewElement.querySelector("[data-dz-name]").textContent=e.upload.filename,e._captionBox.name=e.filename,e._captionBox.onkeyup=function(){i()};function i(){d("caption",e._captionBox)}}),this.on("sending",function(e,a,i){i.append("edit_mode",t.edit_mode),i.append("item_id",t.item_id),i.append("max_files",3)}),this.on("removedfile",function(e){d("removeImage",e.filename)}),this.on("success",function(e,a){if(a.msg=="success"){let x=function(){d("caption",e._captionBox)};e.filename=a.success,e._captionBox.name=e.filename,e._captionBox.onkeyup=function(){x()},d("clicked",e.filename)}else if(a.msg=="fail"){var i,o,u,p,c,z=a.success;for(e.previewElement.classList.add("dz-error"),p=e.previewElement.querySelectorAll("[data-dz-errormessage]"),c=[],o=0,u=p.length;o<u;o++)i=p[o],c.push(i.textContent=z);return c}})}});t.images&&t.images.forEach(n=>{var e=g().props.value.uploadUrl+"/"+n.img_path;let a={name:"Filename",filename:n.img_path,caption:n.img_desc,upload:{filename:n.img_path},size:12345};w.displayExistingFile(a,e)})}}),(f,s)=>(L(),y("div",null,[b("div",{ref_key:"dropRef",ref:l,class:"dropzone custom-dropzone"},null,512)]))}};export{F as _};
