
const BenefitDtl = ({detailsArray}) => {

    return (
        <div>
           
            {detailsArray.map((data, index)=>(
                
             <div key={index} className="mini-container"> 
                <div className="icon">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.4"
                 stroke="currentColor" 
                 class="w-10 h-10"
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