'use client';

import './contato.css';
import { League_Spartan } from 'next/font/google';

const LeagueSpartan = League_Spartan({
    weight: '800',
    subsets: ['latin'],
});

export default function PaginaContato() {
    return (
        <div className="pagina-contato bg-claro">
            <div className="cabecalho-contato text-center text-white p-5">
                <h1 className={`titulo-principal ${LeagueSpartan.className}`}>
                    Entre em Contato | Fale com a BandMatch
                </h1>
                <p className="texto-cabecalho">
                    Tem dúvidas ou precisa de ajuda? Ligue, envie um email ou preencha o formulário abaixo.
                </p>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-5 mb-5">
                        <p className={`mini-titulo ${LeagueSpartan.className}`}>CONTATO</p>
                        <h2 className={`titulo-secundario ${LeagueSpartan.className}`}>Fale Conosco</h2>
                        <p className="descricao-esquerda">
                            Se você tem uma dúvida, estamos aqui para ajudar. Entre em contato e vamos começar!
                        </p>
                    </div>

                    <div className="col-lg-7">
                        <form className="formulario-contato">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Nome *</label>
                                    <input type="text" className="form-control entrada" placeholder="Seu nome" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Sobrenome *</label>
                                    <input type="text" className="form-control entrada" placeholder="Seu sobrenome" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email *</label>
                                <input type="email" className="form-control entrada" placeholder="seu@email.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefone *</label>
                                <input type="text" className="form-control entrada" placeholder="(99) 99999-9999" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Mensagem *</label>
                                <textarea className="form-control entrada" rows={5} placeholder="Digite sua mensagem..."></textarea>
                            </div>
                            <button type="submit" className="btn botao-enviar w-100">Enviar</button>
                        </form>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className={`titulo-secundario mb-4 ${LeagueSpartan.className}`}>Perguntas Frequentes</h2>
                    <div className="accordion" id="accordionFAQ">

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className={`accordion-button faq-botao ${LeagueSpartan.className}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    Como encontro músicos com o mesmo estilo que o meu?
                                </button>
                            </h2>
                            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    Basta criar seu perfil e selecionar os estilos musicais que você curte. Nosso sistema sugere conexões compatíveis!
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed faq-botao ${LeagueSpartan.className}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    É gratuito criar uma banda na plataforma?
                                </button>
                            </h2>
                            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    Sim! Você pode criar e gerenciar bandas gratuitamente. Em breve teremos recursos premium opcionais.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed faq-botao ${LeagueSpartan.className}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    Posso publicar músicas na plataforma?
                                </button>
                            </h2>
                            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    Sim! Músicos podem adicionar um portfólio de músicas para exibir seus trabalhos e encontrar colaborações.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed faq-botao ${LeagueSpartan.className}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                    Posso divulgar eventos ou shows na plataforma?
                                </button>
                            </h2>
                            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    Sim! Em breve lançaremos uma funcionalidade para divulgação de eventos, ensaios e apresentações ao vivo.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed faq-botao ${LeagueSpartan.className}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                                    A plataforma é voltada apenas para músicos profissionais?
                                </button>
                            </h2>
                            <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    Não! A BandMatch é para todos: iniciantes, amadores e profissionais. Todos são bem-vindos para se conectar e colaborar.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed faq-botao ${LeagueSpartan.className}`} type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                                    Como funciona a recomendação de bandas?
                                </button>
                            </h2>
                            <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    Nosso algoritmo analisa seu perfil, preferências musicais e instrumentos para sugerir bandas que estão procurando alguém como você.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
