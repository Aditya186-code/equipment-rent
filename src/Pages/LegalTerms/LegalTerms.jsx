import React from 'react'
import './LegalTerms.css'
const LegalTerms = () => {
  return (
    <div className = "legalTerms">
        <div className="privacy">
            <h1 className = "privacyH1">Privacy Policy</h1>
            <p className = "privacyDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum officia voluptas. Cupiditate eveniet eos, corrupti, nihil laudantium veritatis, magnam doloremque accusantium laborum quo facilis ab in quibusdam repudiandae excepturi enim! Maxime rem molestias quos fugiat quis natus accusamus non aliquid recusandae sunt modi tenetur enim, voluptates quo ad amet?

            </p>
        </div>
        <div className="terms">
            <h1 className=' = "termsH1'>Terms of Use</h1>
            <p className = "termsDesc" style = {{marginBottom : "15px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum in, obcaecati voluptatem quas architecto blanditiis totam sed, libero non ullam, at magni animi et quos consectetur consequatur? Laboriosam suscipit cum adipisci maxime optio nisi, inventore quis autem dignissimos eveniet placeat fugit ut temporibus rem nulla quas architecto iste voluptatibus praesentium!</p>

            <p className = "termsAgreement">
        <input type="checkbox" style = {{marginRight : "10px"}}/>
        I agree to the terms of agreement.
        </p>

        </div>
        .
    </div>
  )
}

export default LegalTerms