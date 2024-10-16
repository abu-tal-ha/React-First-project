/* eslint-disable react/prop-types */
import Button from "../../components/Button"


function GalleryItem(props) {

    let {image, name, category_name} = props.galleryItemData;

  return (
    <div className=" border">
        <img className="w-full h-60 object-cover" src={image} alt="my image" />
        <h3 className="text-2xl font-bold p-2">{name.toUpperCase()}</h3>
        <span className="block pl-2 font-bold">{category_name}</span>
        <Button className="px-8 py-3 btn btn-active btn-secondary hover:bg-red-500 inline-block mb-6 mt-3 ml-2">Click Now</Button>
    </div>
  )
}

export default GalleryItem