
import { useContext, useEffect } from "react";
import trash from "../../assets/delete_FILL0_wght400_GRAD0_opsz48 6.svg";
import pencil from "../../assets/edit_FILL0_wght400_GRAD0_opsz48 2.svg";
import { AuthContext } from "../../contexts/authContext";
import Api from "../../services/Api";


const ProfileCardMaterial = ({ user }) => {

    const { setRemove, remove } = useContext(AuthContext)

    useEffect(() => {
        console.log("montou")
        const id = localStorage.getItem("@eCOMPANY:user_id")

        Api.get(`users/${id}/products`).then((response) => {
          
        
        })  
    },[remove])

    console.log(user)
    const handleDelete = async (product) => {
    
        const {id}  = product
        
        await Api.delete(`products/${id}`)

        setRemove(id)
    }
    
    const { products } = user   
    
    return  (
            <>
            {products?.map((product, i) => (  

                <li 
                    key={i}
                    className="card"
                >
                    <img 
                        className="image-card"
                        src={product.image} 
                        alt="Imagem do produto" 
                    />
                    <div className="card-options">
                        <img src={pencil} alt="Botão editar anuncio" />
                        <img 
                            onClick={() => handleDelete(product)}
                            src={trash} 
                            alt="Botão deletar anuncio"
                        />
                    </div>
                </li>
            ))}
            </>
        )
}
export default ProfileCardMaterial;