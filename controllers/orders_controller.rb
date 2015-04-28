class OrdersController < Sinatra::Base
  enable  :sessions

  # ***** Helpers *****
  def order_params
    return params[:order] if params[:order]
    body_data = {}
    @request_body ||= request.body.read.to_s
    body_data = (JSON(@request_body)) unless @request_body.empty?
    body_data = body_data['order'] || body_data
  end


  get '/' do
    content_type :json
    orders = Order.all
    orders.to_json
  end


  get '/:id' do
    content_type :json
    order = Order.find(params[:id].to_i)
    order.to_json
  end

  post '/' do
    content_type :json
    newOrder = Order.create(params[:order])
    newOrder.to_json
  end

  patch '/:id' do
    content_type :json
    order = Order.find(params[:id].to_i)
    order.update(params[:order])
    order.to_json
  end

  put '/api/orders/:id' do
    content_type :json
    order = Order.find(params[:id].to_i)
    order.update(params[:order])
    order.to_json
  end

  delete '/:id' do
    content_type :json
    order = Order.find(params[:id].to_i)
    order.destroy
  end

end
