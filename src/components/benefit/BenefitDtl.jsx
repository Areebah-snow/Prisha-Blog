
const BenefitDtl = ({detailsArray}) => {

    return (
        <div>
           
            {detailsArray.map((data, index)=>(
                
             <div  key={index} className="right-container"> 
                <div className="icon">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                 stroke="currentColor" 
                 class="w-6 h-6"
                 dangerouslySetInnerHTML={{ __html: data.icon }}>
                
                 </svg>
                </div>
                <div className="details text-light-brown-1">
                        <h1 className="font-bold">{data.heading}</h1>
                        <p>{data.details}</p>
                </div>
                </div> 
            ))}
             
            
        </div>
      );
}
 
export default BenefitDtl;