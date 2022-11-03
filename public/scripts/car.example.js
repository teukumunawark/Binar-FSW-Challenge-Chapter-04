class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card" style="width: 18rem; height: 600px;">
    <img src="${this.image}" class="card-img-top" style="height: 220px; display: block;"
      alt="${this.id}">
    <div class="card-body text-start px-3 d-flex flex-column">
      <p class="card-text fw-normal">${this.model} / ${this.type}</p>
      <p class="card-text fw-bold">Rp 430.000 / hari</p>
      <p class="card-text fw-light">${this.description}</p>
      <p class="card-text"><i class="fa-solid fa-user me-3"></i>4 orang</p>
      <p class="card-text"><i class="fa-solid fa-gear me-3"></i>${this.transmission}</p>
      <p class="card-text"><i class="fa-solid fa-calendar-days me-3"></i>Tahun ${this.year}</p>
      <div class="mt-auto">
        <a href="#" class="btn btn-green fw-normal px-3 w-100">Pilih Mobil</a>
      </div>
    </div>
  </div>
    `;
  }
}
