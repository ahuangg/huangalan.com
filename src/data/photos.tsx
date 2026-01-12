export interface Photo {
    id: number;
    src: string;
    alt: string;
    location?: string;
    date?: string;
    device?: string;
}

export const PHOTOS: Photo[] = [
    {
        id: 1,
        src: "/photos/6B16CDAC-88BD-46FB-B640-C4BE80B14B40_1_105_c.jpeg",
        alt: "Photo 1",
        location: "Seattle, WA",
        date: "June 9, 2023",
        device: "Apple iPhone 14 Pro",
    },
    {
        id: 2,
        src: "/photos/473E4E68-C27F-47FA-94D4-151CC63A8412_1_102_o.jpeg",
        alt: "Photo 2",
        location: "Washington State, USA",
    },
    {
        id: 3,
        src: "/photos/F7E1D487-EA5D-46D2-A742-7DF6D0C6CAC1_1_105_c.jpeg",
        alt: "Photo 3",
        location: "Washington State, USA",
    },
    {
        id: 4,
        src: "/photos/88BB99C0-6B22-456B-9500-E63ECC075687_4_5005_c.jpeg",
        alt: "Photo 4",
        location: "New York City, NY",
    },
    {
        id: 5,
        src: "/photos/8E4D0F86-F306-4B58-B058-EBE7AB38FD92_4_5005_c.jpeg",
        alt: "Photo 5",
        location: "Stony Brook, NY",
    },
    {
        id: 6,
        src: "/photos/E6DE565E-8C9C-4214-B95F-4194605CCDAB_1_105_c.jpeg",
        alt: "Photo 6",
        location: "Stony Brook, NY",
    },
    {
        id: 7,
        src: "/photos/8E49EA02-6E4E-4C31-979D-6951AC809D60_4_5005_c.jpeg",
        alt: "Photo 7",
        location: "China",
    },
    {
        id: 8,
        src: "/photos/578E9D21-74FF-4DB4-A464-80226B7E79EA_1_102_o.jpeg",
        alt: "Photo 8",
        location: "Beijing, China",
    },
    {
        id: 9,
        src: "/photos/A0F7B606-53A2-4250-9437-3D0B55D433ED_1_102_o.jpeg",
        alt: "Photo 9",
        location: "Wenzhou, China",
    },
    {
        id: 10,
        src: "/photos/DF87B01C-264F-4ABA-854D-B4179B9688E2_1_102_o.jpeg",
        alt: "Photo 10",
        location: "Wenzhou, China",
    },
    {
        id: 11,
        src: "/photos/0DACAE8E-2DBF-4877-989D-D529083601B6_1_105_c.jpeg",
        alt: "Photo 11",
        location: "Hangzhou, China",
    },
    {
        id: 12,
        src: "/photos/855CA72F-16FE-47AA-B95F-2A77C36EAC9F_4_5005_c.jpeg",
        alt: "Photo 12",
        location: "Hengdian, China",
    },
    {
        id: 13,
        src: "/photos/3EFC4974-4944-4AD6-9D3F-BF154F8333DC_4_5005_c.jpeg",
        alt: "Photo 13",
        location: "Port Jefferson, NY",
    },
    {
        id: 14,
        src: "/photos/AEE60FB6-609C-40FC-81BD-1B291C4ED8E0_1_105_c.jpeg",
        alt: "Photo 14",
        location: "New Brunswick, NJ",
    },
    {
        id: 15,
        src: "/photos/876239DF-8FE2-4C5D-B473-0BBF274D2D8A_1_105_c.jpeg",
        alt: "Photo 15",
        location: "Middletown, NJ",
    },
    {
        id: 16,
        src: "/photos/4B9EBC37-9C1C-42F2-9646-8C508F034DFC_1_105_c.jpeg",
        alt: "Photo 16",
        location: "Middletown, NJ",
    },
    {
        id: 17,
        src: "/photos/E9D7564A-F5B4-40E9-A969-63112C02CBA1_1_105_c.jpeg",
        alt: "Photo 17",
        location: "Mahwah, NJ",
    },
    {
        id: 18,
        src: "/photos/BCE77532-1F00-4494-84E1-0AA5ED4BA8CB_1_105_c.jpeg",
        alt: "Photo 18",
        location: "Mahwah, NJ",
    },
    {
        id: 19,
        src: "/photos/D58E4ACC-52C7-4455-A617-D92C1790B7FA_1_105_c.jpeg",
        alt: "Photo 19",
        location: "Newark, NJ",
    },
    {
        id: 20,
        src: "/photos/4B7EA935-290F-4623-8E0F-50EB2DE1AA16_4_5005_c.jpeg",
        alt: "Photo 20",
        location: "Piscataway, NJ",
    },
    {
        id: 21,
        src: "/photos/E452D018-92BC-47E8-BEEC-820A275745EF_4_5005_c.jpeg",
        alt: "Photo 21",
        location: "Suffolk County, New York",
    },
    {
        id: 22,
        src: "/photos/9C546714-CC67-4F2F-B23E-3A864C2CEC35_4_5005_c.jpeg",
        alt: "Photo 22",
        location: "Piscataway, NJ",
    },
    {
        id: 23,
        src: "/photos/B3BA998C-AAF8-4D4E-89A1-54D460B115BF_1_102_o.jpeg",
        alt: "Photo 23",
        location: "Middletown, NJ",
    },
    {
        id: 24,
        src: "/photos/683C290F-8030-430C-AAA6-A95F6D6670D1_1_102_a.jpeg",
        alt: "Photo 24",
        location: "Middletown, NJ",
    },
    {
        id: 25,
        src: "/photos/323AF59E-1938-41B8-B6A7-13BEC5EC6F22_1_102_o.jpeg",
        alt: "Photo 25",
        location: "Middletown, NJ",
    },
    {
        id: 26,
        src: "/photos/A8DCFFB0-0284-4EE3-9F9C-2B9AEEDC7C2E_1_102_o.jpeg",
        alt: "Photo 26",
        location: "Middletown, NJ",
    },
    {
        id: 27,
        src: "/photos/C08CC924-6992-4E30-AF38-6D904899788A_4_5005_c.jpeg",
        alt: "Photo 27",
        location: "Long Island City, NY",
    },
    {
        id: 28,
        src: "/photos/EB70C425-B16E-4BDB-A4CA-88D96935241E_1_105_c.jpeg",
        alt: "Photo 28",
        location: "Flushing, NY",
    },
    {
        id: 29,
        src: "/photos/C8E67A54-D14C-4DB6-9D97-635BABACE68E_1_105_c.jpeg",
        alt: "Photo 29",
        location: "Long Island City, NY",
    },
    {
        id: 30,
        src: "/photos/D7998B56-2B6C-4200-BDBD-E10CA3C10B4B_4_5005_c.jpeg",
        alt: "Photo 30",
        location: "Whitestone, NY",
    },
    {
        id: 31,
        src: "/photos/FDDD9ED1-9776-4AFE-9C7E-CAFA2A30D6FC_1_102_o.jpeg",
        alt: "Photo 31",
        location: "Central Park, NY",
    },
    {
        id: 32,
        src: "/photos/0EDA4004-971A-4662-AA6C-6333B62E6627_4_5005_c.jpeg",
        alt: "Photo 32",
        location: "Central Park, NY",
    },
    {
        id: 33,
        src: "/photos/7A8DB379-9919-4BE3-841D-CA94F16E7C8F_4_5005_c.jpeg",
        alt: "Photo 33",
        location: "New York City, NY",
    },
    {
        id: 34,
        src: "/photos/978645D8-9BDE-41DD-BB8A-13B7B344BF2D_1_105_c.jpeg",
        alt: "Photo 34",
        location: "Grand Canyon, AZ",
    },
    {
        id: 35,
        src: "/photos/B0F33835-57FC-4E91-B3EF-F04CCECC5299_1_105_c.jpeg",
        alt: "Photo 35",
        location: "Zion National Park, UT",
    },
    {
        id: 36,
        src: "/photos/F095C809-398E-4445-B23D-725A91F63A2E_1_105_c.jpeg",
        alt: "Photo 36",
        location: "Las Vegas, NV",
    },
    {
        id: 37,
        src: "/photos/A68E1221-263A-435B-ADE4-AF2F0DA820E5_1_105_c.jpeg",
        alt: "Photo 37",
        location: "Las Vegas, NV",
    },
    {
        id: 38,
        src: "/photos/044C3A30-8129-4855-A512-C27BB869A88D_1_201_a.jpeg",
        alt: "Photo 38",
        location: "Las Vegas, NV",
    },
    {
        id: 39,
        src: "/photos/E1751438-29AC-4CBC-9A86-9D2C3485CCA5_1_105_c.jpeg",
        alt: "Photo 39",
        location: "Shawnee Mountain, PA",
    },
    {
        id: 40,
        src: "/photos/B6C4FB8A-7BC7-4A00-8ADF-9438DE6D931C_1_105_c.jpeg",
        alt: "Photo 40",
        location: "Shawnee Mountain, PA",
    },
];
