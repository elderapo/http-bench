use actix_web::{web, App, HttpRequest, HttpServer};

async fn index(req: HttpRequest) -> &'static str {
    "Hello world!"
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {

    HttpServer::new(|| {
        App::new()
            .service(web::resource("/").to(index))
    })
    // .backlog(1024)
    .bind("0.0.0.0:3003")?
    .run()
    .await
}
