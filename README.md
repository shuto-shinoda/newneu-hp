# newnew-hp
<img width="1438" alt="d2a6b5415be1253308d65a44f8a69fb1" src="https://user-images.githubusercontent.com/69189662/106354321-575b9100-6334-11eb-8fd2-6c37cd663209.png">

## App URL
https://newneu-hp.herokuapp.com
# 実装済み

・レスポンシブデザイン
<img width="499" alt="f7e752cdc92579764e6e3e6523adc9c4" src="https://user-images.githubusercontent.com/69189662/106354412-f7b1b580-6334-11eb-92b4-8150c00784e9.png">

・onlineshopへのリンク

・SNSのリンク
<img width="711" alt="382d48c492a09753ebcd9211814a7a05" src="https://user-images.githubusercontent.com/69189662/106354694-013c1d00-6337-11eb-9992-08dad8b9c96e.png">

・BRAND CONCEPTの表示
![642d8213e32fb75b13c16cb2204556d6](https://user-images.githubusercontent.com/69189662/106354792-9fc87e00-6337-11eb-943c-b3f4e22159b8.jpg)
![bd50b9c39de01a2b695fd1630aee0fe2](https://user-images.githubusercontent.com/69189662/106354797-a7882280-6337-11eb-9bfc-c2fe1af1d67c.jpg)

・DESIGNER PROFILE
<img width="1437" alt="5e4db8e6845b8caffc77c52a25ed172d" src="https://user-images.githubusercontent.com/69189662/106354889-28471e80-6338-11eb-98c9-24a623543cee.png">

・PRESS詳細
<img width="1430" alt="266c6d82477c79de390ae2698c2ac140" src="https://user-images.githubusercontent.com/69189662/106354948-8116b700-6338-11eb-995c-06a8e2b6b2b5.png">

# 実装予定

・質問ページ実装

・ログイン機能実装

# ファッションブランドのホームページと紐ずくオンラインショップ作成

・ホームページを見たら興味がそそるようなホームページを作成できるように心がけました。

・オンラインショップも購入したくなるようなページにしたく実装予定です。

・実装に伴いページにはブランドの強みを分かりやすくするように心がけました。

・ナビゲーションバーより見たいところにすぐ移動ができるようリンクました。

・画像を多くすることで飽きないページになるよう心がけました。

# テーブル設計（実装予定の方テーブル、カラムも含まれてます）

## admin テーブル

| Column   | Type   | Options                  |
| -------- | ------ | ------------------------ |
| email    |string  | null: false, unique:true |
| password | string | null: false, unique:true |

## customer テーブル

| Column           | Type   | Options                 |
| ---------------- | ------ | ----------------------- |
| email            | string | null: false             |
| first_name       | string | null: false             |
| first_name_kana  | string | null: false             |
| family_name      | string | null: false             |
| family_name_kana | string | null: false             |
| post_code        | string | null: false             |
| address          | string | null: false             |
| tel              | string |null: false, unique:true |

### Association

- has_many :cart_items
- has_many :products, through: :cart_items
- has_many :orders
- has_many :addresses

## address テーブル

| Column      | Type    | Options           |
| ----------- | ------- | ----------------- |
| customer_id | integer | foreign_key: true |
| post_code   | string  | null: false       |
| addressee   | string  | null: false       |
| address     | string  | null: false       |

### Association

- belongs_to :customer
- cart_item
- Column	Type	Options
- product_id	integer	foreign_key: true
- customer_id	integer	foreign_key: true
- quantity	integer	null: false

## genres テーブル

| Column   | Type    | Options     |
| -------- | ------- | ----------- |
| name     | string  | null: false |
| validity | boolean | null: false |

### Association

- has_many :products

## order_item テーブル

| Column      | Type    | Options     |
| ----------- | ------- | ----------- |
| product_id  | integer | null: false |
| order_id    | integer | null: false |
| quantity    | integer | null: false |
| order_price | integer | null: false |
| make_status | integer | null: false |

### Association

- belongs_to :order
- belongs_to :product

## order テーブル

| Column          | Type    | Options           |
| --------------- | ------- | ----------------- |
| customer_id     | integer | foreign_key: true |
| addressee       | string  | null: false       |
| post_code       | string  | null: false       |
| send_to_address | string  | null: false       |
| how_to_pay      | boolean | null: false       |
| deliver_fee     | integer | null: false       |
| order_status    | integer | null: false       |

### Association

- belongs_to :customer
- has_many :order_items, dependent: :destroy
- has_many :products, :through => :order_items
- belongs_to :customer


## product テーブル

| Column       | Type    | Options           |
| ------------ | ------- | ----------------- |
| genre_id     | integer | foreign_key: true |
| name         | string  | null: false       |
| introduction | text    | null: false       |
| status       | boolean | null: false       |
| image_id     | string  | null: false       |
| price        | integer | null: false       |

### Association

- belongs_to :genre
- has_many :cart_items
- has_many :customers, through: :cart_items
- has_many :order_items
- has_many :products, through: :order_items
- attachment :image

