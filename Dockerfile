FROM alpine

COPY web/dist /data/static
COPY api/target/release/beauty /data
WORKDIR /data

EXPOSE 8000

CMD ["beauty"]
