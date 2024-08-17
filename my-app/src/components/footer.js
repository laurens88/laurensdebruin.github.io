import '../styles/footer.module.css'

const currentYear = new Date().getFullYear()

function Footer () {
  return (
    <footer>
      <p>© {currentYear} Laurens de Bruin. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer