let arr = [{
    dp:"https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400",story:"https://images.pexels.com/photos/9158253/pexels-photo-9158253.jpeg?auto=compress&cs=tinysrgb&w=400" },

{dp:"https://images.pexels.com/photos/3748399/pexels-photo-3748399.jpeg?auto=compress&cs=tinysrgb&w=400",story:"https://images.pexels.com/photos/3748399/pexels-photo-3748399.jpeg?auto=compress&cs=tinysrgb&w=400" },

{dp:"https://images.pexels.com/photos/18492659/pexels-photo-18492659/free-photo-of-portrait-of-a-young-deer-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=400",story:"https://images.pexels.com/photos/18492659/pexels-photo-18492659/free-photo-of-portrait-of-a-young-deer-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=400" },

{dp:"https://images.pexels.com/photos/12756544/pexels-photo-12756544.jpeg?auto=compress&cs=tinysrgb&w=400",story:"https://images.pexels.com/photos/12756544/pexels-photo-12756544.jpeg?auto=compress&cs=tinysrgb&w=400" },

{dp:"https://images.pexels.com/photos/3565545/pexels-photo-3565545.jpeg?auto=compress&cs=tinysrgb&w=400",story:"https://images.pexels.com/photos/3565545/pexels-photo-3565545.jpeg?auto=compress&cs=tinysrgb&w=400" },

]

let storyian = document.querySelector("#storyian")

var clutter = ""
arr.forEach(function(elem,index){
clutter+= `<div class="story">
<img id='${index}' src="${elem.dp}" alt="">
</div>`
   
    console.log( elem.dp);
})

storyian.innerHTML = clutter

storyian.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"

document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})
`

setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
},2000)

})
















