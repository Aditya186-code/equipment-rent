import './Technician.css'
import Individual from './Individual/Individual'
const Technician = () => {
  return (
    <div className = "technicianContainer">
      <h1 style = {{fontSize : "24px", marginBottom : "10px"}}>Technicians</h1>
      <div className="technicianWrapper">
        <Individual occupation = "Surveyor with Total station" img1Src = "https://saarit.in/img/bg-img/stationab.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "John Doe" name2 = "John Doe" name3= "John Doe" name4 = "John Doe" />
        
        <Individual occupation = "Plumber" img1Src = "https://assets.procrewschedule.com/spai/q_lossy+ret_img+to_webp/https://www.procrewschedule.com/wp-content/uploads/2020/06/plumber-at-work-in-a-bathroom-1024x683-1-768x512.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "John Doe" name2 = "John Doe" name3= "John Doe" name4 = "John Doe" />

        <Individual occupation = "Electrician" img1Src = "https://image.shutterstock.com/image-photo/smiling-handsome-electrician-repairing-electrical-260nw-1192486423.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "John Doe" name2 = "John Doe" name3= "John Doe" name4 = "John Doe" />

        <Individual occupation = "Welder" img1Src = "https://www.liveabout.com/thmb/wg_loGLLgil6Xjgqs9hoyY6Dcag=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-821095740-5ba88c8e46e0fb00256b49a1.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "John Doe" name2 = "John Doe" name3= "John Doe" name4 = "John Doe" />

        <Individual occupation = "Painters" img1Src = "https://mattthepainter.com/wp-content/uploads/professional-painters-1024x683.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "John Doe" name2 = "John Doe" name3= "John Doe" name4 = "John Doe" />

         <Individual occupation = "Crane Operators" img1Src = "https://www.hseblog.com/wp-content/uploads/2021/12/Training-And-Certification-Requirements-For-Crane-Operators-1024x683.jpg" img2Src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" name1 = "John Doe" name2 = "John Doe" name3= "John Doe" name4 = "John Doe" />

        </div>
    </div>
  )
}

export default Technician