import mailI from '../../img/icons/mail.svg';
import linkedInI from '../../img/icons/linkedin.svg';

const Socials = () => {
  const socialsList = [
    { url: "mailto:kilian.spore@gmail.com", imageSrc: mailI},
    { url: "https://www.linkedin.com/in/kilian-boivert-ab57aa265/", imageSrc: linkedInI},
  ];

  return (
    <div className="socials" transition-style="in:wipe:bottom">
      {socialsList.map((social, index) => ( 
        <a href={social.url} className="social" key={index} target="_blank" rel="noreferrer">
          <img src={social.imageSrc} alt={social.url}/>
        </a>
      ))}
    </div>
  );
}
 
export default Socials;