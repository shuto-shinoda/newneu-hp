Rails.application.routes.draw do
  root to: 'posts#index'
  get "/" => 'posts#index'
end