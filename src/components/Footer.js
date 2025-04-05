export default function Footer(props) {
  return (
    <section id="footer">
      <div>
        <a href=''/*"./UTDTechResume.pdf"*/ className="footerLink link" title="Download" tabIndex="0" download>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='none' viewBox="0 0 48 48" id="resumeSVG">
            <path d="M10 38V44H38V38" fill="" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M38 20V14L30 4H10V20" fill="" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 4V14H38" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="4" y="20" width="40" height="18" rx="2" stroke="black" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M21 25V33" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            <path d="M10 25V33" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            <path d="M32 33V25H37" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 30H37" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 25H13.5C14.8807 25 16 26.1193 16 27.5V27.5C16 28.8807 14.8807 30 13.5 30H10" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 25H23C25.2091 25 27 26.7909 27 29V29C27 31.2091 25.2091 33 23 33H21" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12H20" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        &nbsp;Resume
        </a>
        <div className="footerLink link" tabIndex="0" onClick={() => props.contact(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='black' className="bi bi-envelope" id="contactSVG" viewBox="0 0 16 14">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
          &nbsp;Contact
        </div>
      </div>
    </section>
  );
}