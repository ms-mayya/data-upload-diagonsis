import { Location } from './Location';

export class Carrier {
    data: string;
    from?: string;
    location: Location;
    sender: string;
    to: string;
    uploadedAt: Date;
}
