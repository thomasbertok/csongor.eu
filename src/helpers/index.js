// create a proper full url for the images by name
function getImageUrl(name) {
    return new URL(`../assets/portfolio/${name}`, import.meta.url).href;
}
  
export default getImageUrl;  