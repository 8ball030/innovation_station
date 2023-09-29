FROM python:3.10-slim as base
ENV VIRTUAL_ENV=/opt/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
WORKDIR /app

RUN apt-get update && \
    rm -rf /var/lib/apt/lists/* && \
    pip install poetry==1.3.2 --no-cache-dir && \
    python3 -m venv $VIRTUAL_ENV
COPY pyproject.toml poetry.lock ./
RUN poetry install --only main --no-root

FROM python:3.10-slim-bullseye
ENV VIRTUAL_ENV=/opt/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
ENV PYTHONPATH=.
RUN mkdir /app
WORKDIR /app
COPY --from=base $VIRTUAL_ENV $VIRTUAL_ENV

RUN python3 -m venv $VIRTUAL_ENV
COPY . .
RUN python3 -m mkdocs build
WORKDIR /app/site
ENTRYPOINT [ "/opt/venv/bin/python" ]
CMD ["-m", "http.server", "--bind", "0.0.0.0", "5000"]
