class FoodsController < Sinatra::Base
  enable  :sessions
  helpers Sinatra::SessionHelper

  # ***** Helpers *****
  def food_params
    return params[:food] if params[:food]
    body_data = {}
    @request_body ||= request.body.read.to_s
    body_data = (JSON(@request_body)) unless @request_body.empty?
    body_data = body_data['food'] || body_data
  end


  get '/' do
    content_type :json
    foods = Food.all
    foods.to_json
  end


  get '/:id' do
    content_type :json
    food = Food.find(params[:id])
    food.to_json
  end

  post '/' do
    content_type :json
    newFood = Food.create(params[:food])
    newFood.to_json
  end

  patch '/:id' do
    content_type :json
    food = Food.find(params[:id].to_i)
    food.update(params[:food])
  end

  put ':id' do
    content_type :json
    food = Food.find(params[:id].to_i)
    food.update(params[:food])
  end

  delete ':id' do
    content_type :json
    food = Food.find(params[:id].to_i)
    food.destroy
  end
end
