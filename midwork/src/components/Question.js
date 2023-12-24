import React from 'react';

const FAQPage = () => {
  return (
    <div className="container-fluid mt-5" style={{ background: '#f8f9fa', padding: '50px', width: '80%' , overflow:"hidden"}}>
    <h1 className="mb-4 text-center text-dark">Frequently Asked Questions</h1>

    <div className="accordion" id="faqAccordion" style={{ textAlign: 'left' }}>
      {/* Orders Section */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="ordersHeader">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ordersCollapse" aria-expanded="true" aria-controls="ordersCollapse">
            Orders
          </button>
        </h2>
        <div id="ordersCollapse" className="accordion-collapse collapse show" aria-labelledby="ordersHeader" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            <ul>
              <li>How can I place an order?</li>
              <li>Can I have items sent to someone as a gift?</li>
              <li>Can I place my order over the phone?</li>
              <li>Can I collect an order from a store?</li>
              <li>My order/item hasn’t arrived</li>
              {/* Add more questions here */}
            </ul>
          </div>
        </div>
      </div>

      {/* Product & Stock Section */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="productStockHeader">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#productStockCollapse" aria-expanded="false" aria-controls="productStockCollapse">
            Product & Stock
          </button>
        </h2>
        <div id="productStockCollapse" className="accordion-collapse collapse" aria-labelledby="productStockHeader" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            <ul>
              <li>Size Guide</li>
              <li>Shirt Customization</li>
              {/* Add more questions here */}
            </ul>
          </div>
        </div>
      </div>

      {/* Site Section */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="siteHeader">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#siteCollapse" aria-expanded="false" aria-controls="siteCollapse">
            Site
          </button>
        </h2>
        <div id="siteCollapse" className="accordion-collapse collapse" aria-labelledby="siteHeader" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            <ul>
              <li>Contact us</li>
              <li>What is the definition of "working days"?</li>
              <li>Troubleshooting steps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="deliveryHeader">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#deliveryCollapse" aria-expanded="false" aria-controls="deliveryCollapse">
            Delivery
          </button>
        </h2>
        <div id="deliveryCollapse" className="accordion-collapse collapse" aria-labelledby="deliveryHeader" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            <ul>
              <li>How can I track my order?</li>
              {/* Add more questions here */}
            </ul>
          </div>
        </div>
      </div>

      {/* Returns & Refunds Section */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="returnsRefundsHeader">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnsRefundsCollapse" aria-expanded="false" aria-controls="returnsRefundsCollapse">
            Returns & Refunds
          </button>
        </h2>
        <div id="returnsRefundsCollapse" className="accordion-collapse collapse" aria-labelledby="returnsRefundsHeader" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            <ul>
              <li>How to return an item</li>
              <li>Personalized goods and other exclusions</li>
              <li>How long do I have to return my item?</li>
              <li>Can I return an item for exchange?</li>
              <li>What do I do if I receive a faulty item?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ... Repeat similar structure for other sections ... */}
    </div>
  </div>
  );
};

export default FAQPage;