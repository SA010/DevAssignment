//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.1.0 (NJsonSchema v10.7.2.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export class Address implements IAddress {
    readonly id!: number;
    addressLine!: string;
    company?: Company;
    companyId?: number;

    constructor(data?: IAddress) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.addressLine = _data["addressLine"] !== undefined ? _data["addressLine"] : <any>null;
            this.company = _data["company"] ? Company.fromJS(_data["company"]) : <any>null;
            this.companyId = _data["companyId"] !== undefined ? _data["companyId"] : <any>null;
        }
    }

    static fromJS(data: any): Address {
        data = typeof data === 'object' ? data : {};
        let result = new Address();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["addressLine"] = this.addressLine !== undefined ? this.addressLine : <any>null;
        data["company"] = this.company ? this.company.toJSON() : <any>null;
        data["companyId"] = this.companyId !== undefined ? this.companyId : <any>null;
        return data;
    }
}

export interface IAddress {
    id: number;
    addressLine: string;
    company?: Company;
    companyId?: number;
}

export class Company implements ICompany {
    id!: number;
    companyName!: string;
    addresses?: Address[] | null;
    vacancies?: Vacancy[] | null;

    constructor(data?: ICompany) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.companyName = _data["companyName"] !== undefined ? _data["companyName"] : <any>null;
            if (Array.isArray(_data["addresses"])) {
                this.addresses = [] as any;
                for (let item of _data["addresses"])
                    this.addresses!.push(Address.fromJS(item));
            }
            else {
                this.addresses = <any>null;
            }
            if (Array.isArray(_data["vacancies"])) {
                this.vacancies = [] as any;
                for (let item of _data["vacancies"])
                    this.vacancies!.push(Vacancy.fromJS(item));
            }
            else {
                this.vacancies = <any>null;
            }
        }
    }

    static fromJS(data: any): Company {
        data = typeof data === 'object' ? data : {};
        let result = new Company();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["companyName"] = this.companyName !== undefined ? this.companyName : <any>null;
        if (Array.isArray(this.addresses)) {
            data["addresses"] = [];
            for (let item of this.addresses)
                data["addresses"].push(item.toJSON());
        }
        if (Array.isArray(this.vacancies)) {
            data["vacancies"] = [];
            for (let item of this.vacancies)
                data["vacancies"].push(item.toJSON());
        }
        return data;
    }
}

export interface ICompany {
    id: number;
    companyName: string;
    addresses?: Address[] | null;
    vacancies?: Vacancy[] | null;
}

export class CompanyDto implements ICompanyDto {
    readonly id?: number | null;
    companyName!: string;
    vacancies?: VacancyDto[] | null;

    constructor(data?: ICompanyDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.companyName = _data["companyName"] !== undefined ? _data["companyName"] : <any>null;
            if (Array.isArray(_data["vacancies"])) {
                this.vacancies = [] as any;
                for (let item of _data["vacancies"])
                    this.vacancies!.push(VacancyDto.fromJS(item));
            }
            else {
                this.vacancies = <any>null;
            }
        }
    }

    static fromJS(data: any): CompanyDto {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["companyName"] = this.companyName !== undefined ? this.companyName : <any>null;
        if (Array.isArray(this.vacancies)) {
            data["vacancies"] = [];
            for (let item of this.vacancies)
                data["vacancies"].push(item.toJSON());
        }
        return data;
    }
}

export interface ICompanyDto {
    id?: number | null;
    companyName: string;
    vacancies?: VacancyDto[] | null;
}

export class CompanyUpdateDto implements ICompanyUpdateDto {
    id!: number;
    companyName!: string;

    constructor(data?: ICompanyUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.companyName = _data["companyName"] !== undefined ? _data["companyName"] : <any>null;
        }
    }

    static fromJS(data: any): CompanyUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["companyName"] = this.companyName !== undefined ? this.companyName : <any>null;
        return data;
    }
}

export interface ICompanyUpdateDto {
    id: number;
    companyName: string;
}

export class Vacancy implements IVacancy {
    readonly id!: number;
    title!: string;
    description?: string | null;
    company?: Company;
    companyId?: number;

    constructor(data?: IVacancy) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.title = _data["title"] !== undefined ? _data["title"] : <any>null;
            this.description = _data["description"] !== undefined ? _data["description"] : <any>null;
            this.company = _data["company"] ? Company.fromJS(_data["company"]) : <any>null;
            this.companyId = _data["companyId"] !== undefined ? _data["companyId"] : <any>null;
        }
    }

    static fromJS(data: any): Vacancy {
        data = typeof data === 'object' ? data : {};
        let result = new Vacancy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["title"] = this.title !== undefined ? this.title : <any>null;
        data["description"] = this.description !== undefined ? this.description : <any>null;
        data["company"] = this.company ? this.company.toJSON() : <any>null;
        data["companyId"] = this.companyId !== undefined ? this.companyId : <any>null;
        return data;
    }
}

export interface IVacancy {
    id: number;
    title: string;
    description?: string | null;
    company?: Company;
    companyId?: number;
}

export class VacancyDto implements IVacancyDto {
    readonly id?: number | null;
    title!: string;
    description?: string | null;

    constructor(data?: IVacancyDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.title = _data["title"] !== undefined ? _data["title"] : <any>null;
            this.description = _data["description"] !== undefined ? _data["description"] : <any>null;
        }
    }

    static fromJS(data: any): VacancyDto {
        data = typeof data === 'object' ? data : {};
        let result = new VacancyDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["title"] = this.title !== undefined ? this.title : <any>null;
        data["description"] = this.description !== undefined ? this.description : <any>null;
        return data;
    }
}

export interface IVacancyDto {
    id?: number | null;
    title: string;
    description?: string | null;
}