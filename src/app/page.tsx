// pages/index.js
import Head from "next/head";
import Image from "next/image";
import "./style.css";
import "./reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

export default function Home() {
  const aa = "fa-solid fa-coffee";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script
          src="https://kit.fontawesome.com/e68953718c.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="/reset.css" />
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100"
          rel="stylesheet"
        />
        <title>Projeto alimentAção</title>
      </Head>

      <div className="header">
        <div className="header_menu">
          <FontAwesomeIcon icon={"fa-solid fa-bars" as IconProp} size="xs" />
        </div>
        <Image
          className="headerLogo"
          src="/logo.png"
          alt="Logo"
          width={280}
          height={60}
        />
        <div className="header_nav_links">
          <a href="/">Home</a>
          <a href="/">Quem Somos</a>
          <a href="/">Login</a>
        </div>
        <div className="header_btn">
          <span>Cadastre-se</span>
        </div>
        <div className="lista_btn">
          <FontAwesomeIcon
            icon={"fa-brands fa-linkedin" as IconProp}
            className="icon"
          />
          <FontAwesomeIcon
            icon={"fa-brands fa-square-instagram" as IconProp}
            size="xs"
            className="icon"
          />
          <FontAwesomeIcon
            icon={"fa-brands fa-square-facebook" as IconProp}
            className="icon"
          />
          <FontAwesomeIcon
            icon={"fa-brands fa-square-whatsapp" as IconProp}
            className="icon"
          />
          <FontAwesomeIcon
            icon={"fa-solid fa-envelope" as IconProp}
            className="icon"
          />
        </div>
      </div>

      <div className="main_page">
        <h1 className="main_page_title">
          Contribuir com uma doação é plantar a semente da esperança na vida de
          alguém, cultivando um futuro melhor para todos.
        </h1>
        <div className="main_page_items">
          <div className="main_page_box">
            <h2 className="main_page_box_title">Nosso objetivo</h2>
            <p className="main_page_box_description">
              Nossa missão é reduzir o desperdício, a má distribuição de
              alimentos e contribuir para a diminuição de gases de efeito estufa
              no planeta.
            </p>
          </div>
          <div className="main_page_box">
            <h2 className="main_page_box_title">O que fazemos</h2>
            <p className="main_page_box_description">
              Através da plataforma Alimentação, nós e empresas parceiras doamos
              e encaminhamos alimentos que perderam valor comercial e assim
              gerar um grande impacto social e ambiental.
            </p>
          </div>
          <div className="main_page_box">
            <h2 className="main_page_box_title">Como você pode participar</h2>
            <p className="main_page_box_description">
              Clique aqui, cadastre-se e escolha o melhor plano e comece a nos
              ajudar a fazer o encaminhamento correto dos alimentos
            </p>
          </div>
        </div>
      </div>

      <div className="tela">
        <div className="laranja">
          <h1>ESCOLHA COMO DOAR:</h1>
          <div className="ulario">
            <div className="ulTit">
              <h3>doações flexíveis e de acordo com o seu bolso</h3>
              <i className="fa-solid fa-face-smile"></i>
            </div>
            <div className="toggle">
              <div className="toggle-container">
                <input type="radio" id="mensal" name="toggle" checked />
                <label htmlFor="mensal" className="toggle-label">
                  MENSAL
                </label>
                <input type="radio" id="unica" name="toggle" />
                <label htmlFor="unica" className="toggle-label">
                  ÚNICA
                </label>
                <div className="toggle-slider"></div>
              </div>
            </div>
            <div className="toggle-value-container">
              <div className="toggle-value-btn">
                <input type="radio" id="30" name="toggleValue" checked />
                <label htmlFor="30" className="toggle-label-value">
                  R$ 30,00
                </label>
              </div>
              <div className="toggle-value-btn">
                <input type="radio" id="55" name="toggleValue" />
                <label htmlFor="55" className="toggle-label-value">
                  R$ 55,00
                </label>
              </div>
              <div className="toggle-value-btn">
                <input type="radio" id="100" name="toggleValue" />
                <label htmlFor="100" className="toggle-label-value">
                  R$ 100,00
                </label>
              </div>
              <div className="toggle-value-btn">
                <input type="radio" id="outroValor" name="toggleValue" />
                <label htmlFor="outroValor" className="toggle-label-value">
                  OUTRO VALOR
                </label>
              </div>
            </div>
            <div className="ulario-info-user">
              <h3>Informe os seus dados de contato:</h3>
              <div className="user-input">
                <label>NOME*</label>
                <input type="text" id="name" />
              </div>
              <div className="user-input">
                <label>EMAIL*</label>
                <input type="email" id="email" />
              </div>
              <div className="user-input">
                <label>NUMERO DE TELEFONE*</label>
                <input type="tel" id="telefone" />
              </div>
              <div className="user-input">
                <label>DATA DE NASCIMENTO*</label>
                <input type="date" id="data" />
              </div>
              <div className="user-input">
                <label>SEXO*</label>
                <select id="sexo">
                  <option value="">SELECIONE</option>
                  <option value="M">MASCULINO</option>
                  <option value="F">FEMININO</option>
                  <option value="N">PREFIRO NÃO INFORMAR</option>
                </select>
              </div>
              <h3>
                Deseja receber informações sobre o impacto das doações recebidas
                e demais campanhas?
              </h3>
              <div className="check-permission">
                <input type="checkbox" id="permission" name="permissionValue" />
                <label htmlFor="permission" className="permission-label">
                  Sim, por favor. Desejo receber essas comunicações.
                </label>
              </div>
              <h3 className="d-user">INFORME SEUS DADOS PARA DOAÇÃO</h3>
              <div className="user-input">
                <label>CPF*</label>
                <input type="text" id="cpf" />
              </div>
              <div className="user-input">
                <label>FORMAS DE DOAÇÃO*</label>
                <select id="tiposDeDoacao">
                  <option value="">SELECIONE</option>
                  <option value="CC">CARTÃO DE CREDITO</option>
                  <option value="PIX">PIX</option>
                  <option value="BOLETO">BOLETO</option>
                </select>
              </div>
              <div className="check-permission">
                <input
                  type="checkbox"
                  id="permissionDados"
                  name="permissionDadosValue"
                />
                <label htmlFor="permissionDados" className="permission-label">
                  Desejo manter minha doação e meus dados anônimos
                </label>
              </div>
              <h3>Informe seu endereço:</h3>
              <div className="user-input">
                <label>CEP*</label>
                <input type="text" id="cep" />
              </div>
              <div className="user-input">
                <label>RUA*</label>
                <input type="text" id="rua" />
              </div>
              <div className="user-input">
                <label>NÚMERO*</label>
                <input type="text" id="numeroCasa" />
              </div>
              <div className="user-input">
                <label>COMPLEMENTO</label>
                <input type="text" id="complmento" />
              </div>
              <div className="user-input">
                <label>BAIRRO*</label>
                <input type="text" id="bairro" />
              </div>
              <div className="user-input">
                <label>CIDADE*</label>
                <input type="text" id="cidade" />
              </div>
              <div className="user-input">
                <label>ESTADO*</label>
                <input type="text" id="estado" />
              </div>
              <div className="user-input">
                <label>ESTADO*</label>
                <select id="estadoSelect">
                  <option value="">SELECIONE</option>
                </select>
              </div>
              <div className="check-permission">
                <input
                  type="checkbox"
                  id="permissionData"
                  name="permissionDataValue"
                />
                <label htmlFor="permissionData" className="permission-label">
                  Li e aceito as Politíticas de privacidade*
                </label>
              </div>
            </div>
            <div className="footer">
              <div></div>
              <div className="finish-btn">
                <span>FINALIZAÇÃO DOAÇÃO</span>
              </div>
              <div className="termos">
                <p>
                  Informações Fiscais <br />
                  Política de Cookies <br />
                  Termos de Serviço
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
