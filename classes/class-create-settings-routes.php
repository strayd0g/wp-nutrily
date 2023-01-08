<?php
class WP_React_Chart_Rest_Routes {

    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'create_rest_routes' ] );
    }

    const URL_ENDPOINT = 'nutrily/v1';

    /**
     * Create rest route endpoint.
     *
     * @return void
     */
    public function create_rest_routes() {
        register_rest_route(self::URL_ENDPOINT, '/user/meals/page/(?P<id>.+)', array(
            'methods' => 'GET',
            'callback' => [ $this, 'get_settings' ],
            'permission_callback' => [ $this, 'get_settings_permission' ],
        ) );

        register_rest_route(self::URL_ENDPOINT, '/user/meals/create', array(
            'methods' => 'POST',
            'callback' => [ $this, 'create_food_meal' ],
            'permission_callback' => [ $this, 'save_settings_permission' ],
        ));

        register_rest_route(self::URL_ENDPOINT, '/user/meals/delete', array(
            'methods' => 'POST',
            'callback' => [ $this, 'delete_food_meal' ],
            'permission_callback' => [ $this, 'save_settings_permission' ],
        ));

        register_rest_route(self::URL_ENDPOINT, '/user/meals/detail/(?P<meal_id>.+)', array(
            'methods' => 'GET',
            'callback' => [ $this, 'view_meal_details' ],
            'permission_callback' => [ $this, 'get_settings_permission' ],
        ));

        register_rest_route(self::URL_ENDPOINT, '/user/meals/nutrition/(?P<meal_id>.+)', array(
            'methods' => 'GET',
            'callback' => [ $this, 'get_nutritional_value' ],
            'permission_callback' => [ $this, 'get_settings_permission' ],
        ));

        register_rest_route(self::URL_ENDPOINT, '/user/meals/get/(?P<meal_id>.+)', array(
            'methods' => 'GET',
            'callback' => [ $this, 'find_meal' ],
            'permission_callback' => [ $this, 'get_settings_permission' ],
        ));


        register_rest_route(self::URL_ENDPOINT, '/search/(?P<food_name>.+)', array(
            'methods' => 'GET',
            'callback' => [ $this, 'search_food_name' ],
            'permission_callback' => [ $this, 'get_settings_permission' ],
        ));
    }

    /**
     * 
     * Rest route endpoint callback.
     * @return void
     * 
     */

     public function find_meal(WP_REST_REQUEST $request) {

        $get_params = urldecode($request->get_param('meal_id'));
        $data = get_meal($get_params);
        return rest_ensure_response( $data );
        
     }


     public function create_food_meal(WP_REST_REQUEST $request) {

        $ingredients_names_array = $request['ingredient_names'];
        $meal_name = $request['meal_name'];
        $prep_steps = $request['prep_steps'];
        $prep_time = $request['prep_time'];
        $total_time = $request['total_time'];
        $tags = $request['tags'];
        $meal_temperature = $request['meal_temperature'];
        $meal_type = $request['meal_type'];
        $ingredients_type = $request['ingredients_type'];
        $img_link = $request['img_link'];
        $general_note = $request['general_note'];
        $optional_note = $request['optional_note'];
        $optional_ingredients = $request['optional_ingredients'];

        create_user_meal($meal_name, $ingredients_names_array, $prep_steps, $prep_time, $total_time, $tags, $meal_temperature, $meal_type, $ingredients_type, $img_link, $general_note, $optional_note, $optional_ingredients);
        return rest_ensure_response( 'succes' );
    }

    public function get_nutritional_value(WP_REST_REQUEST $request) {
        $get_params = urldecode($request->get_param('meal_id'));
        $data = get_nutritional_value($get_params);
        return rest_ensure_response( $data );
    }

    public function delete_food_meal(WP_REST_REQUEST $request) {
        $meal_id = $request['meal_id'];
        delete_specific_meal($meal_id);
        return rest_ensure_response( 'succes' );
    }

    public function view_meal_details(WP_REST_REQUEST $request) {
        $meal_id = $request['meal_id'];
        $data = get_details($meal_id);
        return rest_ensure_response( $data );
    }

     public function search_food_name(WP_REST_REQUEST $request) {

        $get_params = urldecode($request->get_param('food_name'));
        $data = get_foodname_data($get_params);
        return rest_ensure_response( $data );
        
    }


    public function get_settings(WP_REST_REQUEST $request) {
        $get_params = urldecode($request->get_param('id'));
        $response = get_pagination($get_params, 5);
        return rest_ensure_response( $response );
    }


    public function get_settings_permission() {
        return true;
    }

    public function save_settings_permission() {
        return true;
    }

}
new WP_React_Chart_Rest_Routes();