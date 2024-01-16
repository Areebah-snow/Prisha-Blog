import '../footer/footer.css'


const Footer = () => {
    return (

        <div>
        <div className="footer">
          <div className="left">
          <div className='logo '>
            <h1>Pri<span className='lg'>sha.</span></h1>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis architecto doloremque eum quo, sit corporis laborum tenetur
                 laboriosam minima dignissimos.</p>
          </div>
          <div className="right">
            <table>
                <tr>
                    <th>About</th>
                    <th>Categories</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>Chairs</td>
                    <td>prisha1234@gmail.com</td>                        
                </tr>
                <tr>
                    <td>Shop</td>
                    <td>Sofa</td>
                    <td>+1 233 345 564</td>                        
                </tr>
                <tr>
                    <td>Cart</td>
                    <td>Table</td>
                    <td>
                        <ul>
                        <i class='bx bxl-facebook-square'></i>
                        <i class='bx bxl-instagram-alt'></i>
                        <i class='bx bxl-twitter' undefined ></i>
                        </ul>
                    </td>                          
                </tr>
                <tr>
                    <td></td>
                    <td>Lamp</td>
                    <td></td>
                </tr>

            </table>
          </div>
        </div>
    </div>
      );
}
 
export default Footer;