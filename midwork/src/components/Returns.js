import React from 'react';

const Returns = () => {
  return (
    <div style={{ textAlign: 'left', color: 'black' }}>
      <section>
        <h2 style={{ textAlign: 'left', marginLeft:"-1px" }}>Return and Refund Policy</h2>
        <p style={{marginLeft:"-1px"}}>
          We want you to be satisfied with your purchase. If you have any issues with your order, please review our
          return and refund policy below.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpLZBLdXfumlKr7T87ONwi03m_sSAteApdw&usqp=CAU"
          alt="Return Policy Image 1"
          style={{ maxWidth: '100%', width: '600px', marginBottom: '10px', height:"300px", alignItems:"center", marginLeft:"250px" }}
        />
      </section>

      <section>
        <h3 style={{marginTop:"10px"}}>1. Return Eligibility</h3>
        <p style={{marginLeft:"-1px"}}>
          To be eligible for a return, your item must be unused and in the same condition that you received it. It must
          also be in the original packaging.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdkW7wJoOoYIIVKGcZP_TJ9HaY2o2ocNNEQ&usqp=CAU"
          alt="Return Policy Image 2"
          style={{ maxWidth: '100%', width: '600px', marginBottom: '10px', height:"300px", marginLeft:"250px" }}
        />
      </section>

      <section>
        <h3 style={{marginTop:"10px"}}>2. Refund Process</h3>
        <p style={{marginLeft:"-1px"}}>
          Once your return is received and inspected, we will send you an email to notify you that we have received your
          returned item. We will also notify you of the approval or rejection of your refund.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxfI9i5bmRExpKliqI6kIj65ycY7VNpU_Qg&usqp=CAU"
          alt="Return Policy Image 3"
          style={{ maxWidth: '100%', width: '600px', marginBottom: '10px', marginLeft:"250px" , height:"300px" }}
        />
      </section>

      <section>
        <h3>3. Contact Us</h3>
        <p style={{marginLeft:"-1px"}}>
          If you have any questions about our return and refund policy, please contact our customer service.
        </p>
        {/* Additional content for contact information goes here */}
        {/* Add more images as needed */}
      </section>
    </div>
  );
};

export default Returns;