FROM rust:1-stretch as builder

WORKDIR /usr/src/app
# Create blank project
RUN USER=root cargo init
# Copy Cargo.toml to get dependencies
COPY Cargo.toml Cargo.lock ./
# This is a dummy build to get the dependencies cached
RUN cargo build --release
# Copy sources
COPY src src
# Build app (bin will be in /usr/src/app/target/release/server-3)
RUN cargo build --release

FROM debian:stretch-slim
# Copy bin from builder to this new image
COPY --from=builder /usr/src/app/target/release/server-3 /bin/
# Default command, run app
CMD server-3