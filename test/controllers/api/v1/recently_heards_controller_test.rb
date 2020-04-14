require 'test_helper'

class Api::V1::RecentlyHeardsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_recently_heards_create_url
    assert_response :success
  end

end
