export default function NotFound() {
  return (
<>
<div className="container d-flex align-items-center justify-content-center g-5">
      <div className="row w mt-5 mb-5">
        <div className="col-md-6 d-flex flex-column justify-content-center notFoundTexto">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="h4 mb-3">A página que voce está procurando não existe.</h2>
          <p className="text-muted mb-4">
            Você pode ter digitado incorretamente o endereço ou a página pode ter sido movida.
          </p>
          <a href="/" className="btn btn-danger px-4 py-2">
            VOLTAR HOME
          </a>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src='/discoNotFound.png' alt="CD"  />
        </div>
      </div>
    </div>
</>
  );
}
