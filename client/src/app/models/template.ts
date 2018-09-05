export class Template {
    constructor(
      public _id: string,
      public id_employee: string,
      public id_route: string,
      public date_start: string,
      public date_end: string,
      public confirmation_upload: string,
      public confirmation_download: string,
      public adress_start: string,
      public location_start: string,
      public adress_end: string,
      public location_end: string,
      public id_cost_center: string
    ){}
}
