import facebook from "../../svg/icon-facebook.svg";
import instagram from "../../svg/icon-instagram.svg";
import youtube from "../../svg/icon-youtube.svg";
import twitter from "../../svg/icon-twitter.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-section bt-black">
        <section className="container pb-0">
          <div className="row pb-4 bb-black">
            <div className="grid-3">
              <h4>Filmes</h4>
              <div className="flex-start-column mt-2">
                <a href="#" className="color-gray link-footer">
                  Mais Vistos
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais Comentados
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais Populares
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais Recentes
                </a>
              </div>
            </div>
            <div className="grid-3">
              <h4>Categorias</h4>
              <div className="flex-start-column mt-2">
                <a href="#" className="color-gray link-footer">
                  (99) 99999-9999
                </a>
                <a href="#" className="color-gray link-footer">
                  Séries
                </a>
                <a href="#" className="color-gray link-footer">
                  Filmes
                </a>
                <a href="#" className="color-gray link-footer">
                  Cinema
                </a>
              </div>
            </div>
            <div className="grid-6">
              <h4 className="mb-2">
                Quer ser avisado dos novos lançamentos de filmes?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                quo. Laboriosam alias doloremque totam! Expedita unde quo omnis
                placeat labore autem.
              </p>
              <div className="flex-start-row mt-2">
                <input
                  type="text"
                  name="search"
                  placeholder="Digite o seu e-mail"
                />
                <button className="btn ml-2">Cadastrar</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="grid-9">
              <p>2022 |Todos os direitos Reservados. </p>
            </div>
            <div className="grid-3 flex">
              <img src={facebook} alt="" className="icon-s" />
              <img src={instagram} alt="" className="icon-s ml-2" />
              <img src={youtube} alt="" className="icon-s ml-2" />
              <img src={twitter} alt="" className="icon-s ml-2" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
