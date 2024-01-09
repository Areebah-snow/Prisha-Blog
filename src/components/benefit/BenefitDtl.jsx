
const BenefitDtl = ({detailsArray}) => {

    return (
        <div>
           
            {detailsArray.map((data, index)=>(
                
             <div key={index} className="right-container"> 
                <div className="icon">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                 stroke="currentColor" 
                 class="w-8 h-8"
                 dangerouslySetInnerHTML={{ __html: data.icon }}>
                
                 </svg>

                

                </div>
                
                <div className="details">
                        <h1 className="font-bold text-2xl text-dark-brown-2 ">{data.heading}</h1>
                        <p className=" text-light-gray text-lg my-4">{data.details}</p>
                </div>
                </div> 
            ))}
             
            
        </div>
      );
}
 
export default BenefitDtl;