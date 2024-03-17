import FooterCss from "./Footer.module.css"
function Footer() {
    return <>
     <footer className="text-center">
      <div className="container">
        <div className="row">
          <div className={FooterCss.copy}>
            &copy; 2024 | | M&H Developer 
          </div>
        </div>
      </div>
    </footer>
    </>
}

export default Footer
