import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
<section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
     <h1></h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt="" src="images/portfolio/01.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Coffee</h5>
                  <p>Illustrration</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt="" src="images/portfolio/02.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Console</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt="" src="images/portfolio/03.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Judah</h5>
                  <p>Webdesign</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt="" src="images/portfolio/04.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Into The Light</h5>
                  <p>Photography</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt="" src="images/portfolio/05.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Farmer Boy</h5>
                  <p>Branding</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt="" src="images/portfolio/06.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Girl</h5>
                  <p>Photography</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt="" src="images/portfolio/07.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Origami</h5>
                  <p>Illustrration</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt="" src="images/portfolio/08.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Retrocam</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
      </div> {/* portfolio-wrapper end */}
    </div> {/* twelve columns end */}
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/01.jpg" alt="" />
      <div className="description-box">
        <h4>Title_01</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/02.jpg" alt="" />
      <div className="description-box">
        <h4>Console</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/03.jpg" alt="" />
      <div className="description-box">
        <h4>Judah</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/04.jpg" alt="" />
      <div className="description-box">
        <h4>Into the Light</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/05.jpg" alt="" />
      <div className="description-box">
        <h4>Farmer Boy</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/06.jpg" alt="" />
      <div className="description-box">
        <h4>Girl</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/07.jpg" alt="" />
      <div className="description-box">
        <h4>Origami</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/08.jpg" alt="" />
      <div className="description-box">
        <h4>Retrocam</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
  </div> {/* row End */}
</section> {/* Portfolio Section End*/}

      </React.Fragment>
    );
  }
}