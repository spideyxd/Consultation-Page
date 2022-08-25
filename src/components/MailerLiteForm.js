import React from 'react'

const MailerLiteForm = () => {
  return (
    <>
    {/* Begin Mailchimp Signup Form */}
    <link
      href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
      rel="stylesheet"
      type="text/css"
    />
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
      }}
    />
    <div id="mc_embed_signup">
      <form
        action="https://astroanalytics.us12.list-manage.com/subscribe/post?u=9846d631b2ed2542b50a546fa&id=721a8792cc&f_id=00eab5e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
      >
        <div id="mc_embed_signup_scroll">
          <h2>Submit Details</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required=""
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">
              Name <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              name="FNAME"
              className="required"
              id="mce-FNAME"
              required=""
            />
            <span id="mce-FNAME-HELPERTEXT" className="helper_text" />
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>{" "}
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_9846d631b2ed2542b50a546fa_721a8792cc"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
              <p className="brandingLogo">
                <a
                  href="http://eepurl.com/h9CAKX"
                  title="Mailchimp - email marketing made easy and fun"
                >
                  <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    {/*End mc_embed_signup*/}
  </>
  
  
  

  
  )
}

export default MailerLiteForm