FROM rust:1.39 as cargo-build

WORKDIR /usr/src/app

RUN USER=root cargo init

COPY Cargo.toml Cargo.lock ./

RUN mkdir .cargo && \
    cargo vendor > .cargo/config

# # This is a dummy build to get the dependencies cached
# RUN cargo build --release

# Copy sources
COPY src src
RUN cargo build --release && \
    cargo install --path . --verbose

FROM debian:stable-slim

COPY --from=cargo-build /usr/local/cargo/bin/server-3 /bin

CMD server-3