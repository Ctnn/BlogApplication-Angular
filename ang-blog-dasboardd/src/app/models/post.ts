export interface Post {
    baslik: string,
    baglanti: string,
    kategori: {
        kategoriId: string,
        kategori: string,
    },
    postImgPath:string,
    alinti: string,
    icerik: string,
    isFeatured: boolean,
    views: number,
    status: string,
    createdAt: Date,

}
